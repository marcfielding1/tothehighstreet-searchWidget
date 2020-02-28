# tothehighstreet-searchWidget
Custom search widget to pull product data from elasticSearch

# Overview

This custom search widget is to allow customers on mobile and desktop to get a uniform search experience - currently our wordpress theme doesn't pull categories when on mobile and the category dropdown is too big. Categories in our case are actually shops, so we do want users to be able to search in a specific shop easily.

The widget will have the following states.

1) Select a shop, if no selection search across all shops.
2) IF they selected 'All Shops' in the previous step ask for a postcode so we can filter results by distance & price.
4) Search bar 

The search bar will go full screen(results as you type) and display the results in a grid - might end up being a dropdown on desktop - will decide later.

As the user types for V0.1 it'll just do a simple ajax call to a wordpress function and use the default methods to find products(posts) who's title matches the search, v1.0 will hit a search endpoint written by me once I've exported the product data.

# Search Endpoint.

v0.1 The search endpoint will use something like this initially.

```
$the_query = new WP_Query( array( 'posts_per_page' => -1, 's' => esc_attr( $_POST['search_keyword'] ), 'post_type' => 'post' ) );
```

v1.0

Once the product data is in elastic we need to spin up a t2.nano EC2 instance and write a small NodeAPI to sit there and query elasticSearch for us.

The reason we're not using AWS Lambda is because if you're typing every keypress could in theory cause the Lambda API to fan out, that is to say under load we could end up with hundreds of concurrent executions in Lambda which in the long run will be more expensive.

# Testing

For the sake brevity as this is relative small set of components we'll use Cypress.