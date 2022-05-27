package com.cbs.bokeymobile;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.view.View.OnClickListener;
import android.widget.Button;

public class RusServiceActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.rus_activity_service);
        Button artka = (Button)findViewById(R.id.button8);
        Button back = (Button)findViewById(R.id.button13);
        Button bron = (Button)findViewById(R.id.button12);
        Button uzarty = (Button)findViewById(R.id.button11);
        Button surak = (Button)findViewById(R.id.button10);
        Button audio = (Button)findViewById(R.id.button9);
        Button rusbook = (Button)findViewById(R.id.button14);
        Button game = (Button)findViewById(R.id.button15) ;
        Button kruzhok2 = (Button)findViewById(R.id.button24);
        Button site = (Button)findViewById(R.id.button27) ;
        Button map = (Button)findViewById(R.id.button30);
        Button podcastRus1 = (Button)findViewById(R.id.button31);

        podcastRus1.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), PodcastRUSActivity.class);
                startActivity(StartAct);
            }
        });

        back.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), RusRegisterActivity.class);
                startActivity(StartAct);
            }
        });
        bron.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), RusBronActivity.class);
                startActivity(StartAct);
            }
        });
        uzarty.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), RusUzartyActivity.class);
                startActivity(StartAct);
            }
        });
        surak.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), RusForumActivity.class);
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
        rusbook.setOnClickListener(new OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent StartAct = new Intent(getApplicationContext(), RusBookActivity.class);
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
        kruzhok2.setOnClickListener(new OnClickListener() {

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
                Intent StartAct = new Intent(getApplicationContext(), BokeyRusSiteActivity.class);
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