<?php
require("traitement.php")
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <script src="script.js"></script>
    
</head>
<body>
    <form action="" method="POST" id="form_inscription">
        <label for="">Nom</label>
        <input type="text" name="nom" id="nom">
      
       </br>

        <label for="">Prenom</label>
        <input type="text" name="prenom" id="prenom">
        </br>

        <label for="">Mail</label>
        <input type="email" name="email" id="email">
        </br>

        <label for="">Mot de passe :</label>
        <input type="password" name="password" id="password" >
        </br>

        <label for="">Confirmation mot de passe :</label>
        <input type="password" name="password2" id="password2" >
        </br>

        <input type="submit" name="valider" id="btn_inscription">

    </form>
    
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
   <p></p>
    
    
</body>
</html>