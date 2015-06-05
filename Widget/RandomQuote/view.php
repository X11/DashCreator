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
    ),
    array(
        "quote" => "Do not take life too seriously. You will never get out of it alive.",
        "author" => "Albert Hubbard"
    ),

    array(
        "quote" => "The truth is you don't know what is going to happen tomorrow. Life is a crazy ride, and nothing is guarantee",
        "author" => "Eminem"
    ),

    array(
        "quote" => "Life is really simple, but we insist on making it complicated.",
        "author" => "Confucius"
    ),

    array(
        "quote" => "My life is my message",
        "author" => "Mahatma Gandhi"
    ),

    array(
        "quote" => "Change your life today. Don't gamble on the future, act now, without delay.",
        "author" => "Simone de Beauvoir"
    ),

    array(
        "quote" => "Everything is funny, as long as it's happening to somebody else.",
        "author" => "Will Roger"
    ),

    array(
        "quote" => "We must be our own before we can be another's",
        "author" => "Ralph Waldo Emerson"
    ),
);
$item = array_rand($quotes, 1);

?>
<blockquote>
    <p><?= $quotes[$item]["quote"]; ?></p>
    <small><?= $quotes[$item]["author"]; ?></small>
</blockquote>
