let Scraper = require('simple-twitter-scraper-2').scraper;

function custom_search( wOptions ) {
	return new Promise( async function( resolve , reject ) {
		try {
			let keyword = "#AutismResearch" || wOptions.keyword;
			let query;
			if ( wOptions.since_id ) {
				query = `${keyword} since_id:${ wOptions.since_id }`;
			}
			else {
				query = `${keyword} since:${dummyStart} until:${dummyEnd}`;
			}
			let wScraper = new Scraper( query , resolve );
			const tweets = [];
			wScraper.interceptor = function (tweets) { }
			wScraper.start();
		}
		catch( error ) { console.log( error ); reject( error ); }
	});
}

( async ()=> {

	let latest = await custom_search({ keyword: "#AutismResearch" , since_id: "1042444914527817728" });
	console.log( latest );

})();