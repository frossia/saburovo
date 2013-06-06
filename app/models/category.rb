class Category < ActiveRecord::Base
  attr_accessible :name
  has_many :posts
  attr_accessible :post_ids
end
