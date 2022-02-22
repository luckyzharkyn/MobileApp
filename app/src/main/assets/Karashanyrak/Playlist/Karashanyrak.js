        // test image for web notifications
        var iconImage = null;
      
        AP.init({
            container:'#player',//a string containing one CSS selector
            volume   : 0.7,
            autoPlay : true,
            notification: false,
            playList: [
                {'icon': iconImage, 'title': '01. Қарашаңырақ. Алғысөз. 1 бөлім', 'file': 'https://docs.google.com/uc?export=download&id=18fUQ1_Uv5rvfLzrX2mUg2E5_LAjx9M7V'},

                {'icon': iconImage, 'title': '02. Қазақтың қыз алып қашуы туралы 1', 'file': 'https://docs.google.com/uc?export=download&id=1M2k6oYiEo-UHL-a7sxaU8H-lmAxKimbK'},

                {'icon': iconImage, 'title': '03. Қазақтың қыз алып қашуы туралы 2', 'file': 'https://docs.google.com/uc?export=download&id=152xV2Vd2-yVi9rLGWHoqOgKjLl5L44Jq'},

                {'icon': iconImage, 'title': '04. Қазақтың қалыңдық қарауы', 'file': 'https://docs.google.com/uc?export=download&id=1ZC7pfyXdWsIn4kNLg1NAdikvALKaVyE0'},

                {'icon': iconImage, 'title': '05. Қазақтың қыз баланы қалай тәрбиелегені туралы', 'file': 'https://docs.google.com/uc?export=download&id=1EfqsvHpJAkzsD8ofPxf7zeHrjT2r4_Jt'},

                {'icon': iconImage, 'title': '06. Қазақтың ұрын баруы', 'file': 'https://docs.google.com/uc?export=download&id=1G3ymgwF5__texub2BeLHe_LQ8g368Z6o'},

                {'icon': iconImage, 'title': '07. Қазақтың өмірлік жар іздеуі', 'file': 'https://docs.google.com/uc?export=download&id=1RnoRkdhRRG7zINNft_mP0CRoJGXfqIie'},

                {'icon': iconImage, 'title': '08. Қазақтың құда түсуі', 'file': 'https://docs.google.com/uc?export=download&id=1sQZ2zP8F8Q-jRkLizFxL_Acueq7KH2I9'},

                {'icon': iconImage, 'title': '09. Қазақтың қыз ұзатуы', 'file': 'https://docs.google.com/uc?export=download&id=1Ez_4Nb4QqkgqsF_r_hkggvZtIqd4ewCH'},

                {'icon': iconImage, 'title': '10. Қазақтың сүйек лақтыруы туралы', 'file': 'https://docs.google.com/uc?export=download&id=1HhpiRj5OAZ_HNy60R6QNnmRd9gDy9DpA'},

                {'icon': iconImage, 'title': '11. Қазақтардың баспана мәселесін қалай шешкені туралы', 'file': 'https://docs.google.com/uc?export=download&id=1pYHZhZIg_kwY-pq4nUycJhXbc7nLff3a'},

                {'icon': iconImage, 'title': '12. Қазақтың ұлттық идеяны қалай түсінетіні туралы', 'file': 'https://docs.google.com/uc?export=download&id=13bsPLVpDPwwUwtvZ5Ycf6UFLKj-c8ue8'},

                {'icon': iconImage, 'title': '13. Қазақтың сайлауды қалай өткізгені туралы', 'file': 'https://docs.google.com/uc?export=download&id=1hOHXCdxa9zNTwCns7SBTqaWup7Vw9Fy0'},

                {'icon': iconImage, 'title': '14. Қазақ ғарышы', 'file': 'https://docs.google.com/uc?export=download&id=1Ujolx_VxFq1EghM7lfVs33P8oRVYMjop'},

                {'icon': iconImage, 'title': '15. Қазақ тойының есебі туралы', 'file': 'https://docs.google.com/uc?export=download&id=1whsOGUIf2Gfbk6IHoW8BDCWvFvOmUQWu'},

                {'icon': iconImage, 'title': '16. Келіннің келіншек болуы жайлы', 'file': 'https://docs.google.com/uc?export=download&id=1HP8O0IQ5kbX7k4M3pcqLVp_eYz5Sgyap'},

                {'icon': iconImage, 'title': '17. Қазақтың шу шығаруы', 'file': 'https://docs.google.com/uc?export=download&id=1biuuQU8salaLIzBwitJqis2InTb96Yye'},
                
                {'icon': iconImage, 'title': '18. Қазақтардың бөпені қалай баққаны туралы. 1-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1ZGpR1CouUso1Lz1nOHxNtrBWdFyB6kVM'},

                {'icon': iconImage, 'title': '19. Қазақтардың бөпені қалай баққаны туралы. 2-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1dcrBF0zfmmpzZ_P5vlvzkSabnM-7Rn48'},

                {'icon': iconImage, 'title': '20. Қазақтың бала саудалауы', 'file': 'https://docs.google.com/uc?export=download&id=1p5gULxb7XP9sMFWKThCHzjOltQx7El45'},

                {'icon': iconImage, 'title': '21. Қазақтың жын-періні қалай алдағаны туралы', 'file': 'https://docs.google.com/uc?export=download&id=14ZdXdf96c9GOg5kowW8Nm5GC0Pzh7fqY'},

                {'icon': iconImage, 'title': '22. Қазақтың ат тергеуі. 1-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1RF6mjJ_RT5uI9nbH0NtX0-PyIO-fFkd6'},

                {'icon': iconImage, 'title': '23. Қазақтың ат тергеуі. 2-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1iJ_G0Tf9WvLNsOELQyhiDV2yulUu7Avb'},

                {'icon': iconImage, 'title': '24. Қазақтың құт таратуы', 'file': 'https://docs.google.com/uc?export=download&id=1MS5mvdwe16kvJ-IiRDpRkPL7FdKdSrwQ'},

                {'icon': iconImage, 'title': '25. Қазақтың қолайсыз жағдайдан қалай құтылғаны туралы. 1-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=10hyX7OnEAjpKE8DTtbov__--mNw05kAP'},

                {'icon': iconImage, 'title': '26. Қазақтың қолайсыз жағдайдан қалай құтылғаны туралы. 2-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1Ksk2viA3XKo37WsW_a1BEfo2YM0ote0j'},

                {'icon': iconImage, 'title': '27. Қазақтың қолайсыз жағдайдан қалай құтылғаны туралы. 3-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=148u7TCVu9L-Yp_IvCl7dbxyxjvux084Z'},

                {'icon': iconImage, 'title': '28. Қазақтың дәуірге илігуі', 'file': 'https://docs.google.com/uc?export=download&id=1x8mx5KsykoA4CbIxGTPPwq3xG_8V_XNv'},

                {'icon': iconImage, 'title': '29. Қазақтың туыс табуы. 1-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1pJBfPrs2Q848-MlfmYmknZMpdS6usEKm'},

                {'icon': iconImage, 'title': '30. Қазақтың туыс табуы. 2-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=14oL6I7ylUXtaJL3xiGFba54uxcScxxRF'},

                {'icon': iconImage, 'title': '31. Қазақтың туыс табуы. 3-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1YY6Ksj-NYkvk13ifT3KdmVCuRn9YRjxe'},

                {'icon': iconImage, 'title': '32. Қазақтың уақыт есептеуі', 'file': 'https://docs.google.com/uc?export=download&id=12WHUqPwuq9ovdxhXDfKf-jQsYn9bL4mQ'},
                
                {'icon': iconImage, 'title': '33. Арғықазақтың күнтізбе ойлап табуы. 1-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1vG2ohxgYWpz88e4WwjiEuIGapJwnQq3s'},
                
                {'icon': iconImage, 'title': '34. Арғықазақтың күнтізбе ойлап табуы. 2-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1OzB1l7hG021q-t2GVwo7oadi3SNcCxga'},
                
                {'icon': iconImage, 'title': '35. Қазақтың ырымшылдығы туралы. 1-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1eQ0fReQKGXsBvdLFHrL1VTvPyy9VYXzT'},
                
                {'icon': iconImage, 'title': '36. Қазақтың ырымшылдығы туралы. 2-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1EkQkdq_RQU83gaWBLHzwhVHVazH5hX6e'},

                {'icon': iconImage, 'title': '37. Қазақтың ырымшылдығы туралы. 3-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1MbPPoiR1R-26mjxw8UMN2AoZPB_Zt24y'},

                {'icon': iconImage, 'title': '38.  Қазақтың ырымшылдығы туралы. 4-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1MRYR2D1E8mln2gNOqzpMZoNNZD4T24Yd'},

                {'icon': iconImage, 'title': '39. Қазақтың ырымшылдығы туралы. 5-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1dq23XujTSNpWwBxcpq0_oDC1g-K8J4OW'},

                {'icon': iconImage, 'title': '40. Қазақтың ғаламды бөлшектеуі', 'file': 'https://docs.google.com/uc?export=download&id=1IHujfP3iLDrO5oN6JTy7FgjUypJyoSvK'},

                {'icon': iconImage, 'title': '41. Қазақтың қонақ күтуді және ауызбірлікпен өмір сүруді қалай үйренгені туралы', 'file': 'https://docs.google.com/uc?export=download&id=1uJlix8lZp7iJ03LkTuoT2LrH3QbZf9X4'},

                {'icon': iconImage, 'title': '42. Қазақтың жан-жануар тілін ұғуы. 1-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1jB5zxDMTUHUC4USvB02byaKcfezXQNQD'},

                {'icon': iconImage, 'title': '43. Қазақтың жан-жануар тілін ұғуы. 2-бөлім', 'file': 'https://docs.google.com/uc?export=download&id=1mnP6vBXgN_YV50gDrRpNHyaNsymFX-R6'},

                {'icon': iconImage, 'title': '44. Қазақ конондары қалыптасуы жайлы', 'file': 'https://docs.google.com/uc?export=download&id=1ro9Rvg1Iy-2izm9H4bxzu0ZGLHdRqCGQ'},

                {'icon': iconImage, 'title': '45. Қазақтар қалай ажырасты', 'file': 'https://docs.google.com/uc?export=download&id=1ImzeuYy7YVFJkunUNGcSmrVwRn7IwO_b'},

                {'icon': iconImage, 'title': '46. Қазақтың мәңгілікке қалай дайындалғаны туралы', 'file': 'https://docs.google.com/uc?export=download&id=1cwYCVxsscGfjQZlAdzg2-uDKSkJ4PuMq'},

                {'icon': iconImage, 'title': '47. Қазақтың бастауына қайтуы', 'file': 'https://docs.google.com/uc?export=download&id=1uVmloMBUjukHQemIpzeb9Y93ZYJyhrMP'},
          ]
        });
 