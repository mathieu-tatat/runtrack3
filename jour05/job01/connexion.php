<?php
session_start();
require("traitement.php");
require("traitementConnexion.php")

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
    <form action="" method="POST" id="form_connexion">
        
        <label for="">Mail</label>
        <input type="email" name="email" id="email">
        <label for="">Mot de passe :</label>
        <input type="password" name="password" id="password" >
        <input type="submit" name="valider" id="btn_connexion">
    </form>
   
    <p id="mail"></p>
    <p id="p_password"></p>
    <p id="erreur"></p>
    
</body>
</html>