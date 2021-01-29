<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
	<title>Communauté</title>
	<link rel="stylesheet" type="text/css" href="../css/style_general.css">
</head>
<body>
	<header>
		<div><a href="./index.html">Accueil</a></div>
	</header>
	<main>
		<?php if (!isset($_SESSION['username'])) {?>
			<div>
				<form method="post" action="convo_post.php">
					<p>
						Nom d'utilisateur: <br>
						<input type="text" name="username" style="color: black;"><br><br>
						<input type="submit" value="Se connecter" style="color: black;">
					</p>
				</form>
			</div>
			<br><br>
			<?php
		}
		$username = isset($_SESSION['username']) ? $_SESSION['username'] : NULL;
		if (isset($_SESSION['username']) && $_SESSION['username']!="") {
			echo htmlspecialchars("Votre pseudo : $username");
			?>
			<form method="get" action="convo.php">
				<div style="display: inline-flex; flex-direction: column;">
				<p>
					<br> Vous avez : <br><br>
					<input id="argent" type="checkbox" name="argent">
					<label for="argent">Problèmes financiers</label><br>
					<input id="depression" type="checkbox" name="depression">
					<label for="depression">Sentiment de tristesse</label><br>
					<input id="famille" type="checkbox" name="famille">
					<label for="famille">Problèmes familiaux</label><br>
					<input type="submit" value="Solutions">
				</p>
				</div>
			</form>
		<?php }
		if(isset($_GET['argent'])&& $_GET['argent']){
			?>
			<div
				id="argent" style="display: inline-flex; flex-direction: column;">Problèmes d'argent ? <br>
				<p> Découvrez les différentes bourses proposées aux étudiants et leurs modalités :
				<a href="https://www.etudiant.gouv.fr/cid96647/bourses-et-aides-combien-comment.html">Cliquez ici</a></p>
			</div>
			<?php
		}
		if(isset($_GET['depression'])&& $_GET['depression']){
			?>
			<div id="depression" style="display: inline-flex; flex-direction: column;">Problèmes de tristesse ? <br>
				<p> Ne vous renfermez pas sur votre problème ; Parlez-en autour de vous, à votre famille ou à vos amis proches. Si vous n'avez personne à qui parler, vous pouvez vous addresser à des professionnels de santé ou à des bénévoles. Notre <a href="chatbot.html">chatbot</a> pourra vous indiquer le service le plus adapté à vos besoins.
			</div>
			<?php
		}
		if(isset($_GET['famille'])&& $_GET['famille']){
			?>
			<div id="famille" style="display: inline-flex; flex-direction: column;">Problèmes de famille ? <br>
				<p>Si vous avez des problèmes avec les membres de votre famille, n'attendez pas que ceux-ci s'aggravent pour les signaler à un membre de l'autorité ou un personnel médical. Notre équipe est à votre écoute 7j/7 et se soumet au secret médical.</p>
			</div>
			<?php
		}
		?>
		<img src="../images/jeancloudtriste.png" style="height: 200px; width: 120px; position: fixed; bottom: 0; left: 50;">
	</main>
</body>
</html>
