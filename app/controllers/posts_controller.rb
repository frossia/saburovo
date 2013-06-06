class PostsController < ApplicationController

  def index
    @posts = Post.order('created_at').page(params[:page])
    @categores = Category.all

    respond_to do |format|
      format.js
      format.html
      format.xml  { render :xml => @posts }
      format.json { render json: @posts }
    end
  end

  def show
    @post = Post.find(params[:id])
    @categores = Category.all
    respond_to do |format|
      format.js
      format.html
      format.xml  { render :xml => @post }
      format.json { render json: @post }
    end
  end

  def mercury_update
    post = Post.find(params[:id])
    post.title = params[:content][:post_title][:value]
    post.body = params[:content][:post_body][:value]
    post.save!
    render text: ""
  end

end
