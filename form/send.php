<?

$po4ta = "amgalan693@gmail.com"; //Заменить почту, на которую будут приходить заявки
$tema = "Новая заявка"; // Тема письма

$msg = "<table>";

	if($_SERVER[REQUEST_METHOD] == "POST"){
		foreach ($_POST as $key => $value) {
			$msg = $msg."<tr><td>$key</td>$value<td></td></tr>";
		}
		$msg = $msg."</table>";

		if(mail($po4ta, $tema, $msg, "Content-type: text/html; charset=\"utf-8\"")){
			die("0");
		}else{
			die("1");
		}

	}else{
		die("1");
	}	
?>