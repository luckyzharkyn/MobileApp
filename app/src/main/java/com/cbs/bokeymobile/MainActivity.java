package com.cbs.bokeymobile;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button swith = (Button)findViewById(R.id.kazbutton);
        Button swith2 = (Button)findViewById(R.id.rusbutton);
        Button swith3 = (Button)findViewById(R.id.rusbutton);

        swith.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent SecAct = new Intent(getApplicationContext(), ServiceActivity.class);
                startActivity(SecAct);
            }
        });
        swith2.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent SecAct2 = new Intent(getApplicationContext(), RusServiceActivity.class);
                startActivity(SecAct2);
            }
        });
        swith3.setOnClickListener(new View.OnClickListener() {

            @Override
            public void onClick(View v) {
                // TODO Auto-generated method stub
                Intent SecAct3 = new Intent(getApplicationContext(), RusServiceActivity.class);
                startActivity(SecAct3);
            }
        });
    }

}