# Before

I'll take a component driven route and just build each component contained in the page, make it responsive and it should be ok.

component list :

- [x] Header 
- [x] Footer 
- [x] Search Results 
- [x] Search Form  
- [x] Pagination 
- [x] Icons

The idea is to first build a mobile version and make it stretch into a desktop version.

Some points : 

- the mobile version in Figma seems a bit wrong : Footer is replaced by external offers
- the fonts aren't consistent across the page : `Open Sans` for Header, `Manrope` for Search Form & Pagination & Footer, `DM Sans` for Search Results

# During

Some points :

Header :
- the Header is kinda tricky, for this test it's better to just put a margin and adjust other components around, as is, but for a prod project, I would ask the designer if he plans on adding pages where that margin isn't there, in that case, it would be a good idea to add a margin condition to the component.
- Same for background in the figma it's defined in a block in absolute position, in reality, it's better to just attach that to the body and adjust the percentage accordingly to match desktop and mobile view. Here 50% seems ok.

Search Form :
- In mobile version, the figma doesn't have the "search" button and the localisation, which would be a question I would ask.
- The different banners between mobile & desktop don't have the same aspect ratio, it can be done but add unnecessary complexity to the code

API :
- No param in Postman API Doc, so there is a need to filter data from the response the API gives us.

Search Results :
- No indication if there is no results or an error