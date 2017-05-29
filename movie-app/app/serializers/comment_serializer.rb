class CommentSerializer < ActiveModel::Serializer
  attributes :id, :author, :content
  belongs_to :movie
end
