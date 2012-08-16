/**
 * @file
 * Javascript for the image tag on clinet side.
 * Basically, if it's on the /ImageTag, it's probably here.
 * @author Mayank-kamothi <mayank_it@yahoo.com>
 */
(function($) {
Drupal.behaviors.tagBehavior = {
  attach: function (context, settings) {
  //code starts
   $("#edit-search-block-form--2").autocomplete("?q=all_users", {
    selectFirst: true
  });

  if($(".tag").length !=0)
  {
    $(".tag").tag({
    save:
      function(width,height,top_pos,left,label,the_tag,imageName,userId)
      {
        $.post("?q=image_tag",{
                'action':'save',
                  'width':width,
                  'height':height,
                  'top':top_pos,
                  'left':left,
                  'label':label,
                  'imageName' : imageName,
                  'taged_user_id' : userId
                },
                function(id){
                  the_tag.setId(id);
            });
        },
      remove:
        function(id){
          $.post("?q=image_tag",{'action':'delete','id':id});
        }
      });
      var src = $('.tag').attr('src').split('/');
      var fileName = src[src.length - 1];
      $.getJSON("?q=image_tag_all&imageName=" + fileName,{'action':'list'},function(tags){
        $.each(tags, function(key,tag){
            $(".tag").addTag(tag.width, tag.height, tag.top, tag.left, tag.label,tag.id, tag.permission, tag.tag_user_id);
         });
      });
  }
  $(".jTagSaveBtn").click(function(){
    label = $("#jTagLabel").val();
      alert(label);
  });
  //code ends
  }
};
})(jQuery);
