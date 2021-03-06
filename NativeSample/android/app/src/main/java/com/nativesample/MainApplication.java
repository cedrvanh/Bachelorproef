package com.nativesample;

import android.app.Application;

import com.airbnb.android.react.maps.MapsPackage;
import com.viromedia.bridge.ReactViroPackage;

import com.facebook.react.ReactApplication;
import com.airbnb.android.react.lottie.LottiePackage;
import com.rnglmodelview.RNGLModelViewPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.reactnativecommunity.geolocation.GeolocationPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.swmansion.rnscreens.RNScreensPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.swmansion.reanimated.ReanimatedPackage;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                    new MainReactPackage(),
            new LottiePackage(),
                    new RNGLModelViewPackage(),
                    new VectorIconsPackage(),
                    new GeolocationPackage(),
                    new SafeAreaContextPackage(),
                    new RNScreensPackage(),
                    new RNGestureHandlerPackage(),
                    new ReanimatedPackage(),
                    new ReactViroPackage(ReactViroPackage.ViroPlatform.GVR),
                    new MapsPackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
