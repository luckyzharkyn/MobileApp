        // test image for web notifications
        var iconImage = null;
      
        AP.init({
            container:'#player',//a string containing one CSS selector
            volume   : 0.7,
            autoPlay : true,
            notification: false,
            playList: [
                {'icon': iconImage, 'title': '01. Бірінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=16L95m3VnS-Wv1Jw7sFA9xrnGclI-ytDj'},

                {'icon': iconImage, 'title': '02. Екінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1IWvdZMKMZfT9NV2CDlcXVF5Z6xwlS27-'},

                {'icon': iconImage, 'title': '03. Үшінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1X6TOe1sbSXUbVz4hkD19UwQzN6nSpj1a'},

                {'icon': iconImage, 'title': '04. Төртінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1QAjry57VBtDlkEpwALBe9Vk3TAmCVFwz'},

                {'icon': iconImage, 'title': '05. Бесінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1vZe_eLSTD1cJm6EGfl2h4YxwTefzKTix'},

                {'icon': iconImage, 'title': '06. Алтыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1STRkt_V4H83MO02CjBcFQj56HIni6Jqi'},

                {'icon': iconImage, 'title': '07. Жетінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1-dpKo_KJg-Ui0fpucS4kaQzV0ee5bnMn'},
                
                {'icon': iconImage, 'title': '08. Сегізінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1jzFUHbRFf52W9jfEaKX-HKMapXsRfr22'},

                {'icon': iconImage, 'title': '09. Тоғызыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1AXOXo3ZUDfAbZDHfrdIXNaAv07Pi2SAU'},

                {'icon': iconImage, 'title': '10. Оныншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1leQvT5gWAjWF_vhbvFRcpCU0SXx5Na8d'},

                {'icon': iconImage, 'title': '11. Он бірінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=13VRRWVhh2ZDRHqjcwWqbtZSpIzgWq5vg'},

                {'icon': iconImage, 'title': '12. Он екінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1xqMGBnRdMwN5e39oBit5kgU-DexvcoTA'},

                {'icon': iconImage, 'title': '13. Он үшінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1N3HxVr5inl18xYhD0YM8vd1RN_4h0vAP'},

                {'icon': iconImage, 'title': '14. Он төртінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1dBZWujmsFwhSmGV6T-8rEspd4zPbKG7l'},
                
                {'icon': iconImage, 'title': '15. Он бесінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1JBEXt26AdiDIQzgxI1e9oG5P0_jCxMJ_'},

                {'icon': iconImage, 'title': '16. Он алтыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1DIA_sFsvy1aBp8jWqZViurleCcjPEJHp'},

                {'icon': iconImage, 'title': '17. Он жетінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1L_WpqN-aBr2Ne-D9G9FsXaMfXmEk7yzN'},

                {'icon': iconImage, 'title': '18. Он сегізінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=16kEXszi79TUo7RGjM9uCJh21xPnHbOFR'},

                {'icon': iconImage, 'title': '19. Он тоғызыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1xfy-N-8Y0F9sB1vL04YdwGg1oJESB1fX'},

                {'icon': iconImage, 'title': '20. Жиырмасыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1NyrlUKnM8scdP8j6lG1vRP7DcDhWs5Lb'},

                {'icon': iconImage, 'title': '21. Жиырма бірінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1VFrMThW1qla5KUBL7tDJBVpBxx_gV2Av'},

                {'icon': iconImage, 'title': '22. Жиырма екінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1KQfc8Z9w8CauS9knXKJSSBYZgwQIORr-'},

                {'icon': iconImage, 'title': '23. Жиырма үшінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=18kBzAKpt8HsQ676Sn6ZMWqtfRK9qfi4G'},

                {'icon': iconImage, 'title': '24. Жиырма төртінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1eC9z_bTu7mWDqikPsCkjMNbwulsR4yJR'},

                {'icon': iconImage, 'title': '25. Жиырма бесінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1xHFZFOmMLk4kIWPy_kTchzcW9aYxKlL4'},

                {'icon': iconImage, 'title': '26. Жиырма алтыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1ZqJio7slhWwn2ydgRwJzgtxUG76XCR6r'},

                {'icon': iconImage, 'title': '27. Жиырма жетінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1HNL0BJL5aeHT99RNkquoZdGAZ9YzyNlq'},

                {'icon': iconImage, 'title': '28. Жиырма сегізінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1k2LUbDmURUnM2351SgZGXKv0PhxT05uz'},

                {'icon': iconImage, 'title': '29. Жиырма тоғызыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1Uql_biBBculg-9_NIlAqy8sSnAAxpnKc'},

                {'icon': iconImage, 'title': '30. Отызыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1fBTd9YgLeH3gyJBuvUA0Pu_DAkx_hymf'},

                {'icon': iconImage, 'title': '31. Отыз бірінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1s4Y9y9ZbHa4iJ9vZPn30AdUJGo5j8PIu'},

                {'icon': iconImage, 'title': '32. Отыз екінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1wpMRacgT9cPQ6kdHPPqlkuHU_i1sEZuB'},

                {'icon': iconImage, 'title': '33. Отыз үшінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1jplQ6RyPq8s9rER6mBLeXnxWwNgaXkjC'},

                {'icon': iconImage, 'title': '34. Отыз төртінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1teFTmGKo7NCMsOLjroSnWn4nUIcPcSBY'},

                {'icon': iconImage, 'title': '35. Отыз бесінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1RJQY3lczmZemuM8JvWhAozLplvufZ1qi'},

                {'icon': iconImage, 'title': '36. Отыз алтыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1KwEUcgkT0NsyxHdtr94lvjDBOt75j-c4'},

                {'icon': iconImage, 'title': '37. Отыз жетінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1HjeNKIuptVMn_-0QVr5mhy7kcLZf0fRI'},

                {'icon': iconImage, 'title': '38. Отыз сегізінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=17c2quta8B_2tmliGUE3SRMHwiatoc6RI'},

                {'icon': iconImage, 'title': '39. Отыз тоғызыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=1LR1XOC78Mb1TCzQx__0OUDP8Qw0DxpNa'},

                {'icon': iconImage, 'title': '40. Қырқыншы сөз', 'file': 'https://docs.google.com/uc?export=download&id=15n4A_NiTKdLduM8TakEWPJjd5R5am4Uq'},

                {'icon': iconImage, 'title': '41. Қырық бірінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1m9CwFh9ulv5l8cTHCye22jLLH2WQBlbK'},

                {'icon': iconImage, 'title': '42. Қырық екінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1q2EfpIJieEwjT6si0JgygmKARKJORWIJ'},
                
                {'icon': iconImage, 'title': '43. Қырық үшінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1QS6S_DgxFkA-s6RewiFUboXvtFzy8sCh'},

                {'icon': iconImage, 'title': '44. Қырық төртінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1j-7umd1wWSOCKYvfQMeQbcnFM9FmjzHJ'},

                {'icon': iconImage, 'title': '45. Қырық бесінші сөз', 'file': 'https://docs.google.com/uc?export=download&id=1R1zak4QNlSb3Qb44u9J3-OPhtDwO-W6u'},               
              
          ]
        });
 