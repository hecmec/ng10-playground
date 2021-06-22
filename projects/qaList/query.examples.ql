HomeComponent#
{
  qaItems {  
    edges {
      node {
        qst 
        asw
        lang
		    type
      }
    }
  }
}

{
  qaList(id: "aAlgEZC6sT") {
    name
    items {
      edges {
        node {
          qst
          asw
        }
      }
    }
  }
}

query {
  qaItems {
    edges {
      node {
        ... itemFields
      }
    }
  }
}

fragment itemFields on QaItem {
  id
  qst
  asw
  lang
}


query {
  qaItems(first: 3) {
    count
    edges {
      node {
        # itemFields
        id
        qst
        asw
        lang
        #arrays
        cats {
          ... on Element {
            value
          }
        }
        ansAlt {
          ... on Element {
            value
          }
        }
      }
    }
  }
}

