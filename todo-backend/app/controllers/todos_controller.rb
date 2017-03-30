class TodosController < ApplicationController
  skip_before_action :verify_authenticity_token, :only => [:create, :index, :update, :destroy]
  def index
    @todos = Todo.all.order('created_at ASC')
    render json: @todos
  end

  def create
    @todo = Todo.create(todo_params)
  end

  def update
    @todo = Todo.find(params[:id])
    @todo.update(todo_params)
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy
  end

  private

  def todo_params
    params.require(:todo).permit(:task, :isCompleted)

  end
end
