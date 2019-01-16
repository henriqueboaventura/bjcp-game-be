<?php
// Routes

$app->get('/', function ($request, $response, $args) {
  $return = array(
    'status' => FALSE,
    'id' => $_SESSION['current']['id'],
    'style' => $_SESSION['current']['name']
  );
  if($_SESSION['current']['id'] == $args['id']) {
    $return['status'] = TRUE;
  }

  return $response->write('Please use the <em>check</em> or <em>next</em> endpoint');
});

$app->get('/check/{id}', function ($request, $response, $args) {
  $return = array(
    'status' => FALSE,
    'id' => $_SESSION['current']['id'],
    'style' => $_SESSION['current']['name']
  );
  if($_SESSION['current']['id'] == $args['id']) {
    $return['status'] = TRUE;
  }

  return $response->withJson($return, 201);
});

$app->get('/next', function ($request, $response, $args) {
    $xml = new SimpleXMLElement(file_get_contents(__DIR__ . '/../resources/styleguide.xml'));

    $category = $xml->class[0]->category[rand(0, $xml->class[0]->category->count()-1)];
    $style = $category->subcategory[rand(0,$category->subcategory->count()-1)];

    $types = [
      'aroma',
      'appearance',
      'flavor',
      'mouthfeel',
      'impression'
    ];

    $type = $types[rand(0, 4)];
    $content = $style->{$type};

    $return = [
      'type' => ucfirst($type),
      'content' => $content->__toString(),
      'options' => NULL,
      'answer' => $style->attributes()->id->__toString()
    ];
    $options = [];
    $options[] = [
      'id' => $style->attributes()->id->__toString(),
      'name' => $style->name->__toString()
    ];
    $taken = [];
    $taken[] = $style->id;

    while(count($options) < 4) {
      $category = $xml->class[0]->category[rand(0, $xml->class[0]->category->count()-1)];
      $style = $category->subcategory[rand(0,$category->subcategory->count()-1)];
      if(!in_array($style->id, $taken)){
        $options[] = [
          'id' => $style->attributes()->id->__toString(),
          'name' => $style->name->__toString()
        ];
        $taken[] = $style->id;
      }
    }
    shuffle($options);
    $return['options'] = $options;

    return $response->withJson($return, 201);
});
