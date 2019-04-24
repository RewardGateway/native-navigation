require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = "native-navigation"
  s.version      = package['version']
  s.summary      = "Native navigation library for React Native applications"

  s.authors      = { "intelligibabble" => "leland.m.richardson@gmail.com" }
  s.homepage     = "https://github.com/airbnb/native-navigation#readme"
  s.license      = package['license']
  s.platform     = :ios, "9.0"

  s.module_name  = 'NativeNavigation'

  s.source       = { :git => "https://github.com/airbnb/native-navigation.git", :tag => "v#{s.version}" }
  s.source_files  = "lib/ios/native-navigation/*.{h,m,swift}"

  s.ios.deployment_target = "9.0"
  s.tvos.deployment_target = "9.0"
  s.swift_version = '4.2'

  s.dependency 'React'
  s.frameworks = 'UIKit'
end
