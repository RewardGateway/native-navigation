//
//  TabBarViewManager.swift
//  NativeNavigation
//
//  Created by Leland Richardson on 8/10/16.
//  Copyright © 2016 Airbnb. All rights reserved.
//

import UIKit
#if !NN_NO_COCOAPODS
  import React
#endif

final class TabBar: RCTView {

  // MARK: Internal

  @objc func setConfig(_ config: [String: AnyObject]) {
    self.prevConfig = self.renderedConfig
    self.renderedConfig = config
    refresh()
  }

  @objc func refresh() {
    if let tabBar = tabBar {
      implementation.reconcileTabBarConfig(
        tabBar: tabBar,
        prev: prevConfig,
        next: renderedConfig
      );
    }
  }

  // MARK: Private

  private var implementation: ReactNavigationImplementation = ReactNavigationCoordinator.sharedInstance.navigation
  @objc var tabBar: UITabBar?
  private var prevConfig: [String: AnyObject] = [:]
  private var renderedConfig: [String: AnyObject] = [:]
  
}

private let VERSION: Int = 1

@objc(TabBarViewManager)
final class TabBarViewManager: RCTViewManager {
  override func view() -> UIView! {
    return TabBar()
  }
}
