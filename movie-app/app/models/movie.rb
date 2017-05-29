class Movie < ApplicationRecord
  has_and_belongs_to_many :actors
  has_many :comments, dependent: :destroy
end