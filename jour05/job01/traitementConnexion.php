<?php  


    if (isset($_POST['valider'])) {

        if (!empty($_POST['email']) && !empty($_POST['password'])){
        
            try {
                $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8','root', 'root');
              
            } catch (PDOException $e) {
                print "Erreur !: " . $e->getMessage() . "<br/>";
                die();
            }

            $requete = $pdo->prepare('SELECT * FROM `utilisateurs` WHERE email = ? ');
            $requete->execute([$_POST['email']]);
            $resultat_login = $requete->fetch();
            // var_dump($resultat_login);

            if (password_verify ( $_POST['password'] , $resultat_login["password"] ) == true ) {
                
                $success = $resultat_login['prenom']." connexion reussi!";
                // echo "ok";
                echo json_encode( $success);
            }
            else {
           
                $erreur["erreur"] = 'Mot de passe et/ou identifiant invalide !';
                echo json_encode( $erreur);
            }
        }
        else {
            // echo "err2";
            $erreur["erreur"] = 'Les champs ne peuvent pas etre vide';
            echo json_encode( $erreur);
        }

       
    }
?>