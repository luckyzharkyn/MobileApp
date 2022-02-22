        // test image for web notifications
        var iconImage = null;

        AP.init({
            container:'#player',//a string containing one CSS selector
            volume   : 0.7,
            autoPlay : true,
            notification: false,
            playList: [
                {'icon': iconImage, 'title': 'Апамның астауы', 'file': 'https://docs.google.com/uc?export=download&id=1kgZkrw6fSol59f_N4xQQdpC-FdXvgr8W'},              
          ]
        });
 