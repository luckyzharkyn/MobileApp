package com.cbs.bokeymobile;

import com.cbs.bokeymobile.bokeymobile.TalesActivity;
import com.cbs.bokeymobile.bokeymobile.ZharaActivity;
import com.cbs.bokeymobile.bokeymobile.KaraActivity;
import com.cbs.bokeymobile.bokeymobile.WordsActivity;
import com.cbs.bokeymobile.bokeymobile.KarzhyActivity;
import com.cbs.bokeymobile.bokeymobile.BaylykActivity;
import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class AudioCategoryActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.category_service);
        Button tales = (Button)findViewById(R.id.button16);
        Button zhara = (Button)findViewById(R.id.button17);
        Button kara = (Button)findViewById(R.id.button18);
        Button kyryk = (Button)findViewById(R.id.button19);
        Button kenes = (Button)findViewById(R.id.button20);
        Button zhet = (Button)findViewById(R.id.button21);
        Button artka = (Button) findViewById(R.id.button22);
        Button bokeyaudio = (Button)findViewById(R.id.button28);

        tales.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), TalesActivity.class);
                startActivity(StartAct);
            }
        });
        zhara.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), ZharaActivity.class);
                startActivity(StartAct);
            }
        });
        kara.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), KaraActivity.class);
                startActivity(StartAct);
            }
        });
        kyryk.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), WordsActivity.class);
                startActivity(StartAct);
            }
        });
        kenes.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), KarzhyActivity.class);
                startActivity(StartAct);
            }
        });
        artka.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                onBackPressed();
            }
        });
        zhet.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), BaylykActivity.class);
                startActivity(StartAct);
            }
        });
        bokeyaudio.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), BokeyAudioActivity.class);
                startActivity(StartAct);
            }
        });


    }
}