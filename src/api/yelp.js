import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer 7lDpcweuTK8DHuG-4Z5O70Kgm8u6wR1X1V048jUxBkt6WPsBWGmDfKgqyvTnLxVwazmHsHJS95mnnfBauSp7VYOua6xwzqY65biOg3BLG5g7ZD9YMHX7qaYztzXxYXYx'
  }
});