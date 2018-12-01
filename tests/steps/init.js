let initialized = false

const init = async () => {
  if (initialized) {
    return
  }

  process.env.restaurants_api   = "https://ob2uraeivi.execute-api.eu-west-1.amazonaws.com/dev/restaurants"
  process.env.restaurants_table = "restaurants-dev-robert"
  process.env.AWS_REGION        = "eu-west-1"
  process.env.order_events_stream = 'orders-dev-robert'
  process.env.restaurant_notification_topic = 'restaurants-dev-robert'
  process.env.TEST_ROOT = "https://ob2uraeivi.execute-api.eu-west-1.amazonaws.com/dev"
  
  initialized = true
}

module.exports = {
  init
}