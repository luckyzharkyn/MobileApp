        // test image for web notifications
        var iconImage = null;

        AP.init({
            container:'#player',//a string containing one CSS selector
            volume   : 0.7,
            autoPlay : true,
            notification: false,
            playList: [
                {'icon': iconImage, 'title': '01. Бітеу жара. 1 бөлім, 1 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1K-dmZHoo_Eo-hX0IeBwZiZ4i0CHZDp5z'},
                
                {'icon': iconImage, 'title': '02. Бітеу жара. 1 бөлім, 2 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1naIH2h7sIX8H3z6bI2STPtvk0lcABLTa'},
                
                {'icon': iconImage, 'title': '03. Бітеу жара. 1 бөлім, 3 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1CeHJX1brdaCOKrnw090QXRBp0H5WUQf6'},
                
                {'icon': iconImage, 'title': '04. Бітеу жара. 1 бөлім, 4 тарау', 'file': 'https://docs.google.com/uc?export=download&id=19La-GIWKdz-ZeoljI0Oh5kFfacd2KfH5'},
                
                {'icon': iconImage, 'title': '05. Бітеу жара. 1 бөлім, 5 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1cGRL8cMsIDnJ06CTLrDXub4Mw9WXQ8wW'},
                
                {'icon': iconImage, 'title': '06. Бітеу жара. 1 бөлім, 6 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1hsCs3XveZpsj89iim9pExw10X4dkNgrb'},
                
                {'icon': iconImage, 'title': '07 Бітеу жара. 1 бөлім, 7 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1s9_XjbTzAfbOuTfRGVXSu7No9aQ7s5nM'},
                
                {'icon': iconImage, 'title': '08. Бітеу жара. 1 бөлім, 8 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1KbN0OhrOcJIQgcCyuzRXqNLU5BnucZZE'},
                
                {'icon': iconImage, 'title': '09. Бітеу жара. 1 бөлім, 9 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1MnRjWzMtvJShqxa6Wl_Qsk4K1Qgym2Nc'},
                
                {'icon': iconImage, 'title': '10. Бітеу жара. 2 бөлім, 1 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1VzzZTpm9I8tX32V7sL8zqeWt_-za7B1y'},
                
                {'icon': iconImage, 'title': '11. Бітеу жара. 2 бөлім, 2 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1aicydImo-y-1PPaAbOIdfkTHZp_6KIRw'},
                
                {'icon': iconImage, 'title': '12. Бітеу жара. 2 бөлім, 3 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1-VYrF4dpDPrN_FeiMVSPeD8MY9z0wkGq'},
                
                {'icon': iconImage, 'title': '13. Бітеу жара. 2 бөлім, 4 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1CvmL7MMBpmEs39ul8Kvc3eqajJb2HLh9'},
                
                {'icon': iconImage, 'title': '14. Бітеу жара. 2 бөлім, 5 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1ZoGUcO_ognubwYvh4FvOLgjrRc4JkjEs'},

                {'icon': iconImage, 'title': '15. Бітеу жара. 2 бөлім, 6 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1emgH_fpd5_JvyqvVGl2IkPlKeiXqPZ8S'},

                {'icon': iconImage, 'title': '16. Бітеу жара. 2 бөлім, 7 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1cwSPx5J9JdPMQy6WySSHg0nfgrgy5eGy'},

                {'icon': iconImage, 'title': '17. Бітеу жара. 2 бөлім, 8 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1QoykLO4tQu40ko3VDF9wfGVhGWyC_pKD'},
                
                {'icon': iconImage, 'title': '18. Бітеу жара. 2 бөлім, 9 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1WHdw-vp5V5m9kA1AIMyVAueFJ70cXgiS'},

                {'icon': iconImage, 'title': '19. Бітеу жара. 2 бөлім, 10 тарау', 'file': 'https://docs.google.com/uc?export=download&id=11y3Mbm1UiIt97mpfhD-6v2n42B4-9ooq'},

                {'icon': iconImage, 'title': '20. Бітеу жара. 2 бөлім, 11 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1t-5SWUNHS-Ais1TbNw70f_JAvBA2D5dw'},

                {'icon': iconImage, 'title': '21. Бітеу жара. 2 бөлім, 12 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1SvmzrT-x4jsoKNQTrH1X8kZcG-lD7USv'},

                {'icon': iconImage, 'title': '22. Бітеу жара. 2 бөлім, 13 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1WMYg5q6pyEM1QsfLBdd5MQ8AVIpRDfxa'},

                {'icon': iconImage, 'title': '23. Бітеу жара. 3 бөлім, 1 тарау', 'file': 'https://docs.google.com/uc?export=download&id=144MJYQiwyI4daq60PdBdHP_xKlP9Z3uQ'},

                {'icon': iconImage, 'title': '24. Бітеу жара. 3 бөлім, 2 тарау', 'file': 'https://docs.google.com/uc?export=download&id=19D0bIOgvna_YJgPhfUC0CDwKNQeeS_AE'},

                {'icon': iconImage, 'title': '25. Бітеу жара. 3 бөлім, 3 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1n_icU_GElw7g3lRACdrrjdOAV8ZNmhKR'},

                {'icon': iconImage, 'title': '26. Бітеу жара. 3 бөлім, 4 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1g8oaa0OEC9CSjNWBlmke0AChMo6eDMf7'},

                {'icon': iconImage, 'title': '27. Бітеу жара. 3 бөлім, 5 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1aDnAvTVgGni7poggJ87LjLiXoiz736Va'},

                {'icon': iconImage, 'title': '28. Бітеу жара. 3 бөлім, 6 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1YbXpk-xPoRnX1aV6HW9K4VBEwCPkoojX'},

                {'icon': iconImage, 'title': '29. Бітеу жара. 3 бөлім, 7 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1bLeySfr_GV9K3xfSQl4zfDXooU08ud3Q'},

                {'icon': iconImage, 'title': '30. Бітеу жара. 3 бөлім, 8 тарау', 'file': 'https://docs.google.com/uc?export=download&id=15SALrfklvfKrvGYrW8y1mqMKe5B_fKzr'},

                {'icon': iconImage, 'title': '31. Бітеу жара. 3 бөлім, 9 тарау', 'file': 'https://docs.google.com/uc?export=download&id=13JDqen3jC4-Qb9QIn4HTAPArmKMV1ldF'},

                {'icon': iconImage, 'title': '32. Бітеу жара. 3 бөлім, 10 тарау', 'file': 'https://docs.google.com/uc?export=download&id=1ywXM7iq96m4KLxIB6_sqfiqI3vXppbZs'},

                {'icon': iconImage, 'title': '33. Бітеу жара. Эпилог', 'file': 'https://docs.google.com/uc?export=download&id=107jxozQa_1Kzcb49iEykf2EOOYa9hPn3'},
              
          ]
        });
 