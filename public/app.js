// Random links to videos I like when you click on log in!

let linksList = new Array();

linksList[0] = 'https://www.youtube.com/watch?v=Lp0LcjflHwU&ab_channel=SebastianHames';

linksList[1] = 'https://www.youtube.com/watch?v=tp1ZluX4aYs&ab_channel=grocerybagdottvtest';

linksList[2] = 'https://www.youtube.com/watch?v=L65kKBX9muE&ab_channel=OutOfContext';

linksList[3] = 'https://www.youtube.com/watch?v=z2VZ_OGz0RU&ab_channel=WIRED';

linksList[4] = 'https://www.youtube.com/watch?v=1uts8nYBGjg&ab_channel=BuzzFeedCeleb';

function randomLink() {
    window.location = linksList[Math.floor(Math.random()*linksList.length)]
};

