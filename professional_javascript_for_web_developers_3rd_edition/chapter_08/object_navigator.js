function hasPlugin(name){
  name = name.toLowerCase();
  for (var i = 0; i < navigator.plugins.length; i++){
  if (navigator.plugins[i].name.toLowerCase().indexOf(name) > -1){
  return true;
      }
    }
  return false;
}

alert(hasPlugin('Flash'));
alert(hasPlugin('QuickTime'));
alert(hasPlugin('chrome'));
for (var i = 0; i < navigator.plugins.length; i++){
  alert(navigator.plugins[i].name)
}
