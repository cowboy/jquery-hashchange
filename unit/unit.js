// Not sure why this isn't set by default in qunit.js..
QUnit.jsDump.HTML = false;

$(function(){ // START CLOSURE


var is_chrome = /chrome/i.test( navigator.userAgent ),
  aps = Array.prototype.slice;

$('#jq_version').html( $.fn.jquery );

function notice( txt ) {
  if ( txt ) {
    $('#notice').html( txt );
  } else {
    $('#notice').hide();
  }
};

function run_many_tests() {
  var tests = aps.call( arguments ),
    delay = typeof tests[0] === 'number' && tests.shift(),
    func_each = $.isFunction( tests[0] ) && tests.shift(),
    func_done = $.isFunction( tests[0] ) && tests.shift(),
    result;
  
  function set_result( i, test ) {
    result = $.isArray( test )
      ? func_each.apply( this, test )
      : $.isFunction( test )
        ? test( result )
        : '';
  };
  
  if ( delay ) {
    stop();
    
    (function loopy(){
      test && test.func && test.func( result );
      if ( tests.length ) {
        set_result( 0, tests.shift() );
        setTimeout( loopy, delay );
      } else {
        func_done && func_done();
        start();
      }
    })();
    
  } else {
    $.each( tests, set_result );
    func_done && func_done();
  }
}

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

module( 'jQuery hashchange event' );

test( 'window.onhashchange', function() {
  expect( 7 );
  
  var hash, expected_hash, arr = [], msg = 'Testing window.onhashchange and history';
  
  // Pulled out of the plugin
  function get_fragment( url ) {
    url = url || location.href;
    return url.replace( /^[^#]*#?(.*)$/, '$1' );
  };
  
  location.hash = '#a';
  equals( get_fragment(), 'a', 'hash should be set properly' );
  
  $(window).bind( 'hashchange', function(e) {
    hash = get_fragment();
  });
  
  $(window).trigger( 'hashchange' );
  equals( hash, 'a', 'hashchange triggered manually' );
  
  run_many_tests(
    // run asynchronously
    250,
    
    // execute this for each array item
    function( new_hash ){
      notice( msg += '.' );
      expected_hash = new_hash;
      location.hash = '#' + new_hash;
    },
    
    // execute this at the end
    function(){
      notice();
    },
    
    // tests:
    
    ['b'],
    
    function(result){
      equals( hash, expected_hash, 'hash should be set properly' );
    },
    
    [''],
    
    function(result){
      equals( hash, expected_hash, 'hash should be set properly' );
    },
    
    ['d'],
    
    function(result){
      equals( hash, expected_hash, 'hash should be set properly' );
    },
    
    function(result){
      $(window).unbind( 'hashchange' );
    },
    
    function(result){
      $(window).bind( 'hashchange', function(evt){
        arr.push( get_fragment() );
      });
    },
    
    function(result){
      !is_chrome && window.history.go( -1 );
    },
    
    function(result){
      !is_chrome && window.history.go( -1 );
    },
    
    function(result){
      !is_chrome && window.history.go( -1 );
    },
    
    function(result){
      if ( is_chrome ) {
        // Read about this issue here: http://benalman.com/news/2009/09/chrome-browser-history-buggine/
        ok( true, 'history is sporadically broken in chrome, this is a known bug, so this test is skipped in chrome' );
      } else {
        same( arr, ['', 'b', 'a'], 'back button and window.history.go(-1) should work' );
      }
      
      $(window).unbind( 'hashchange' );
      var events = $.data( window, 'events' );
      ok( !events || !events.hashchange, 'hashchange event unbound' );
    },
    
    ['all_done']
    
  );
  
});


}); // END CLOSURE