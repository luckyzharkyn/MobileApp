package com.cbs.bokeymobile;

import android.app.Activity;
import android.graphics.PixelFormat;
import android.os.Build;
import android.os.Bundle;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

import com.cbs.bokeymobile.bokeymobile.KaraActivity;
import com.cbs.bokeymobile.bokeymobile.TalesActivity;
import com.cbs.bokeymobile.bokeymobile.WordsActivity;
import com.cbs.bokeymobile.bokeymobile.ZharaActivity;

public class BokeyAudioActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.bokeyactivity_service);
        Button astau = (Button)findViewById(R.id.astau);
        Button kere = (Button)findViewById(R.id.kere);
        Button kaska = (Button)findViewById(R.id.kaska);
        Button kaskyr = (Button)findViewById(R.id.kaskyr);
        Button back = (Button)findViewById(R.id.artka);
        astau.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), AstauActivity.class);
                startActivity(StartAct);
            }
        });
        kere.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), KereActivity.class);
                startActivity(StartAct);
            }
        });
        kaska.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), KaskaActivity.class);
                startActivity(StartAct);
            }
        });
        kaskyr.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), KaskyrActivity.class);
                startActivity(StartAct);
            }
        });
        back.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                onBackPressed();
            }
        });
    }

}