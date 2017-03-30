class TodoSerializer < ActiveModel::Serializer
  attributes :id, :task, :isCompleted
end
