<?php
try {
    $pdo = new PDO('mysql:host=localhost;dbname=utilisateurs;charset=utf8','root', 'root');
  
} catch (PDOException $e) {
    echo "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}

if (isset($_POST['valider'])) {
    
    if ( !empty($_POST['prenom']) && !empty($_POST['nom']) && !empty($_POST['email']) && !empty($_POST['password']) && !empty($_POST['password2'])) {
        
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $email = $_POST['email'];
        $password = $_POST["password"];
        $password2 = $_POST['password2'];

        $requete_login = $pdo->prepare("SELECT  COUNT(`email`) FROM `utilisateurs` WHERE email = ?");
        $requete_login->execute([$_POST['email']]);
        $resultat = $requete_login->fetch();

        if ( $resultat[0] == 0) {
            if ($password === $password2) {
                    $newMdp = password_hash ( $password , PASSWORD_DEFAULT ) ;
        
                    $requete = $pdo->prepare("INSERT INTO `utilisateurs`( `nom`, `prenom`, `email`, `password`) VALUES (?,?,?,?)");
                    $requete->execute([$nom,$prenom,$email,$newMdp]);
                    $success = 'profil crée !';
                    echo $success;
 
                }
                else {
                   $erreur= "mots de passes differents";
                    echo $erreur;
                }
        }
        else {
            $erreur = 'Email indisponible';
            echo $erreur;
        }

        
    }
    
}


?>