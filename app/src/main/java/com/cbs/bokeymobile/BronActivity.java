package com.cbs.bokeymobile;
import android.graphics.PixelFormat;
import android.os.Build;
import android.os.Bundle;
import android.app.Activity;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;

public class BronActivity extends Activity {
    WebView webView;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setFormat(PixelFormat.TRANSLUCENT);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN,
                WindowManager.LayoutParams.FLAG_FULLSCREEN);//Set full screen
        setContentView(R.layout.webview_page);
        webView = (WebView) findViewById(R.id.activity_main_webview);
        initWebViewSettings();
       webView.loadUrl("https://docs.google.com/forms/d/e/1FAIpQLSciT-saOLVXqzIOe31wUYq6JYsePM5yriZ0arYFO_piHnQhXw/viewform");

        //webView.loadUrl("https://www.google.com/maps/d/u/0/viewer?mid=11FaGVvQewJnrkNScQHxDiWqwm1I4uIYx&ll=50.104980873028%2C52.10903070391922&z=3");
    }
    private void initWebViewSettings() {
        WebSettings webSetting = webView.getSettings();
        webSetting.setJavaScriptEnabled(true);
        webSetting.setJavaScriptCanOpenWindowsAutomatically(true);
        webSetting.setPluginState(WebSettings.PluginState.ON);
        webSetting.setAllowFileAccess(true);
        webSetting.setNeedInitialFocus(true);
        webSetting.setLoadsImagesAutomatically(true);
        webSetting.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NARROW_COLUMNS);
        webSetting.setSupportZoom(true);
        webSetting.setBuiltInZoomControls(true);
        webSetting.setUseWideViewPort(true);
        webSetting.setSupportMultipleWindows(true);
        webSetting.setLoadWithOverviewMode(true);
        webSetting.setAppCacheEnabled(true);
        webSetting.setDatabaseEnabled(true);
        webSetting.setDomStorageEnabled(true);
        webSetting.setGeolocationEnabled(true);
        webSetting.setAppCacheMaxSize(Long.MAX_VALUE);
        webSetting.setPluginState(WebSettings.PluginState.ON_DEMAND);
        webSetting.setRenderPriority(WebSettings.RenderPriority.HIGH);
        webSetting.setCacheMode(WebSettings.LOAD_NO_CACHE);
        //Newly added
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            webSetting.setAllowUniversalAccessFromFileURLs(true);
        }
        webSetting.setAllowFileAccessFromFileURLs(true);
        webSetting.setAllowUniversalAccessFromFileURLs(true);
    }
}