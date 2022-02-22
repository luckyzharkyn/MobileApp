        // test image for web notifications
        var iconImage = null;

        AP.init({
            container:'#player',//a string containing one CSS selector
            volume   : 0.7,
            autoPlay : true,
            notification: false,
            playList: [
                {'icon': iconImage, 'title': 'Қасқыр ұлыған түнде', 'file': 'https://docs.google.com/uc?export=download&id=1mnvjDu4LjdhwXDZBpruYI6ajdWqvdeCY'},
          ]
        });
 