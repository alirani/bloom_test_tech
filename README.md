# Before

I'll take a component driven route and just build each component contained in the page, make it responsive and it should be ok.

component list :

- [ ] Header 
- [ ] Footer 
- [ ] Search Results 
- [ ] Search Form 
- [ ] Hero  
- [ ] Result Card 
- [ ] Pagination 
- [x] Icons

The idea is to first build a mobile version and make it stretch into a desktop version.

Some points : 

- the mobile version in Figma seems a bit wrong : Footer is replaced by external offers
- the fonts aren't consistent across the page : `Open Sans` for Header, `Manrope` for Search Form & Pagination & Footer, `DM Sans` for Search Results

# During

Some points :
- the Header is kinda tricky, for this test it's better to just put a margin and adjust other components around, as is, but for a prod project, I would ask the designer if he plans on adding pages where that margin isn't there, in that case, it would be a good idea to add a margin condition to the component.
- Same for background in the figma it's defined in a block in absolute position, in reality, it's better to just attach that to the body and adjust the percentage accordingly to match desktop and mobile view. Here 50% seems ok.
