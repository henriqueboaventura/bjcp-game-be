<?php
// Routes
//session_start();
$app->get('/', function () use ($app) {
    return $app->render('index.phtml');
});

$app->get('/check/:id', function ($id) use ($app) {
  $return = array(
    'status' => FALSE,
    'id' => $_SESSION['current']['id'],
    'style' => $_SESSION['current']['name']
  );
  if($_SESSION['current']['id'] == $id) {
    $return['status'] = TRUE;
  }

  $response = $app->response();
  $response['Content-Type'] = 'application/json';
  $response->status(200);
  $response->body(json_encode($return));
});

$app->get('/next', function () use ($app) {
    $xml = new SimpleXMLElement(file_get_contents(__DIR__ . '/../resources/styleguide.xml'));

    $category = $xml->class[0]->category[rand(0, $xml->class[0]->category->count()-1)];
    $style = $category->subcategory[rand(0,$category->subcategory->count()-1)];

    $_SESSION['current'] = array(
      'id' => $style->attributes()->id->__toString(),
      'name' => $style->name->__toString(),
    );

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
      'options' => NULL
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
      // $attributes = $style->attributes();
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

    $response = $app->response();
    $response['Content-Type'] = 'application/json';
    $response->status(200);
    $response->body(json_encode($return));
});