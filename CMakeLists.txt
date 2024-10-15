cmake_minimum_required(VERSION 3.8)
project(hmi)

find_package(ament_cmake REQUIRED)
set(WEBSERVER_DIR "${CMAKE_CURRENT_SOURCE_DIR}/modaq_hmi")
set(PROJECT_INSTALL_PREFIX "/var/www")

if(CMAKE_COMPILER_IS_GNUCXX OR CMAKE_CXX_COMPILER_ID MATCHES "Clang")
  add_compile_options(-Wall -Wextra -Wpedantic)
endif()

# find dependencies

## The user must own /var/www/modaq_hmi. To implement:
## sudo mkdir /var/www/modaq_hmi
## sudo chown ${USER} -R /var/www/modaq_hmi
install(DIRECTORY ${WEBSERVER_DIR} 
  DESTINATION ${PROJECT_INSTALL_PREFIX})

  if(BUILD_TESTING)
  find_package(ament_lint_auto REQUIRED)
  # the following line skips the linter which checks for copyrights
  # comment the line when a copyright and license is added to all source files
  set(ament_cmake_copyright_FOUND TRUE)
  # the following line skips cpplint (only works in a git repo)
  # comment the line when this package is in a git repo and when
  # a copyright and license is added to all source files
  set(ament_cmake_cpplint_FOUND TRUE)
  ament_lint_auto_find_test_dependencies()
endif()

ament_package()