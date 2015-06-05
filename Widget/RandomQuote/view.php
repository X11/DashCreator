<?php

$quotes = array(
    array(
        "quote" => "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        "author" => "George Bernard Shaw"
    ),
    array(
        "quote" => "A woman's mind is cleaner than a man's: She changes it more often.",
        "author" => "Oliver Herfort"
    ),
    array(
        "quote" => "Believe that life is worth living and your belief will help to create the fact.",
        "author" => "William James"
    )
);
$item = array_rand($quotes, 1);

?>
<blockquote>
    <p><?= $quotes[$item]["quote"]; ?></p>
    <small><?= $quotes[$item]["author"]; ?></small>
</blockquote>
