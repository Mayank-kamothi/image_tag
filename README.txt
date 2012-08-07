Image tag allows users to attach notes or user references to areas of a image. This is what Flickr and Facebook already do.
This module is based on jQuery UI and only work with the Image and ImageField modules

Install
-------

1. Copy the Imagetag folder into your module folder.

2. Go to the modules page (admin/build/modules) and enable the Image tag  module

3. Navigate to the admin page of the content type for which you want to have an imagetag (admin/content/node-type/YOUR_CONTENT_TYPE):

  a. Add cck image field for that content type

  b. Go to the "Manage Display fields" sub section

  c. select the widget for handling display of the image: set the image style to "tag" one.

4. Now Add this below function to your current theme template.php file and replace <THEME_NAME> to your theme name.

function <THEME_NAME>_image_style($variables) {
  // Determine the dimensions of the styled image.
  if($variables['style_name'] == 'tag') {
    $dimensions = array(
      'width' => $variables['width'], 
      'height' => $variables['height'],
    );
    image_style_transform_dimensions($variables['style_name'], $dimensions);
    $variables['width'] = $dimensions['width'];
    $variables['height'] = $dimensions['height'];
    $variables['attributes']['class'][] = 'tag';
    // Determine the url for the styled image.
    $variables['path'] = image_style_url($variables['style_name'], $variables['path']);
  }
  return theme('image', $variables);
}


5. Clear cache form (admin/config/development/performance).

Todo:
-----

This module is still being actively develop, here are a few things that are still to be done.

* Image style for module side.

Author:
-------
Mayank Kamothi <mayank_it@yahoo.com>
http://drupal.org/user/1040140
http://about.me/mayankkamothi
