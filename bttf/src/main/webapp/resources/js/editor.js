 ClassicEditor
	.create( document.querySelector( '#editor' ),{
	    languge:{ui : 'ko', content:'ko' }
	} )
	.catch( error => {
	    console.error( error );
	} );
	

        
