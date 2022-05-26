package com.cbs.bokeymobile;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

public class ServiceActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service);
        Button artka = (Button)findViewById(R.id.button2);
        Button back = (Button)findViewById(R.id.button7);
        Button bron = (Button)findViewById(R.id.button6);
        Button uzarty = (Button)findViewById(R.id.button5);
        Button surak = (Button)findViewById(R.id.button4);
        Button audio = (Button)findViewById(R.id.button3);
        Button book = (Button) findViewById(R.id.button);
        Button game = (Button) findViewById(R.id.button23);
        Button kruzhok = (Button)findViewById(R.id.button25) ;
        Button site = (Button)findViewById(R.id.button26);
        Button map = (Button)findViewById(R.id.button29);
        Button podcastKaz1 = (Button)findViewById(R.id.button33);
        Button podcastRus = (Button)findViewById(R.id.button31);

        podcastKaz1.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), podcastKaz.class);
                startActivity(StartAct);
            }
        });

        podcastRus.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), podcastRUS.class);
                startActivity(StartAct);
            }
        });

        back.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), RegisterActivity.class);
                startActivity(StartAct);
            }
        });
        bron.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), BronActivity.class);
                startActivity(StartAct);
            }
        });
        uzarty.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), UzartyActivity.class);
                startActivity(StartAct);
            }
        });
        surak.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), ForumActivity.class);
                startActivity(StartAct);
            }
        });
        audio.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), AudioCategoryActivity.class);
                startActivity(StartAct);
            }
        });
        artka.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), MainActivity.class);
                startActivity(StartAct);
            }
        });
        book.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), KazBookActivity.class);
                startActivity(StartAct);
            }
        });
        game.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), GamesActivity.class);
                startActivity(StartAct);
            }
        });
        kruzhok.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), KruzhokActivity.class);
                startActivity(StartAct);
            }
        });
        site.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), BokeySiteActivity.class);
                startActivity(StartAct);
            }
        });
        map.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), MapActivity.class);
                startActivity(StartAct);
            }
        });
    }


}