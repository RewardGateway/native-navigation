package com.airbnb.android.react.navigation;

import com.facebook.react.bridge.Promise;

public class BackStack {

    private final String tag;

    private final ScreenCoordinator.PresentAnimation animation;

    private final Promise promise;

    private int fragmentCount = 0;

    BackStack(String tag, ScreenCoordinator.PresentAnimation animation, Promise promise) {
        this.tag = tag;
        this.animation = animation;
        this.promise = promise;
    }

    String getTag() {
        return tag;
    }

    ScreenCoordinator.PresentAnimation getAnimation() {
        return animation;
    }

    Promise getPromise() {
        return promise;
    }

    void pushFragment() {
        fragmentCount++;
    }

    void popFragment() {
        fragmentCount--;
    }

    public int getSize() {
        return fragmentCount;
    }

    void setFragmentCount(int fragmentCount) {
        this.fragmentCount = fragmentCount;
    }

    void reset() {
        this.setFragmentCount(0);
    }

    public boolean isEmpty() {
        return getSize() == 0;
    }

    @Override
    public String toString() {
        return "BackStack{" + ", tag='" + tag +
                ", size=" + fragmentCount +
                ", animation=" + animation +
                ", promise?=" + (promise != null) +
                '}';
    }
}
