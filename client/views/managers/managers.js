Template.managers.onCreated( () => {
  var template = Template.instance();
  template.subscribe( 'Payees' );
});

Template.managers.helpers({
  artists() {
    let managers = Albums.find( {}, { fields: { artist: 1 } } );
    if ( albums ) {
      return _.uniq( albums.map( ( album ) => {
        return album.artist;
      }), true );
    }
  },
  albums( artistName ) {
    let query  = artistName ? { artist: artistName } : {},
        albums = Albums.find( query, { fields: { title: 1 } } );

    if ( albums ) {
      return albums.map( ( album ) => {
        return album.title;
      });
    }
  }
});
