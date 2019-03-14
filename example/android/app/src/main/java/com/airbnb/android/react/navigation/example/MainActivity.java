package com.airbnb.android.react.navigation.example;

import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.provider.Settings;
import android.support.annotation.Nullable;

import com.airbnb.android.react.navigation.ScreenCoordinatorLayout;
import com.airbnb.android.react.navigation.ReactAwareActivity;
import com.airbnb.android.react.navigation.ScreenCoordinator;
import com.airbnb.android.react.navigation.ScreenCoordinatorComponent;

public class MainActivity extends ReactAwareActivity implements ScreenCoordinatorComponent {
  private static final String TAG = MainActivity.class.getSimpleName();

  private final int OVERLAY_PERMISSION_REQ_CODE = 1;  // Choose any value
  private ScreenCoordinator screenCoordinator;

  @Override
  protected void onCreate(@Nullable Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    ScreenCoordinatorLayout container = (ScreenCoordinatorLayout) findViewById(R.id.content);
    screenCoordinator = new ScreenCoordinator(this, container, savedInstanceState);

    if (savedInstanceState == null) {
      screenCoordinator.presentScreen(MainFragment.newInstance());
    }

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
      if (!Settings.canDrawOverlays(this)) {
        Intent intent = new Intent(Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
                Uri.parse("package:" + getPackageName()));
        startActivityForResult(intent, OVERLAY_PERMISSION_REQ_CODE);
      }
    }
  }

  @Override
  public ScreenCoordinator getScreenCoordinator() {
    return screenCoordinator;
  }

  @Override
  public void onBackPressed() {
    screenCoordinator.onBackPressed();
  }
}
