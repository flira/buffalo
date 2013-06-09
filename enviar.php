<?php
$mensagem="$assunto";
$email="$mail"; 
$header="Mensagem de: $nome <$email - ($DDD) $tel>";
$para ='contato@buffalosecurity.com.br';
$enviar=mail($para,"Novo email do site",$mensagem,$header);
?>