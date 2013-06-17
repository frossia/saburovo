class PostsController < ApplicationController

  respond_to :html, :js

  def index

    #last = params[:last].blank? ? Time.now + 1.second : Time.parse(params[:last])
    #@posts = Post.feed(last)

    #@posts = Post.paginate(:page => params[:page], :per_page => 15)
    #title = 'Администрация Москворечье-Сабурово'
    @posts = Post.order('created_at DESC').page(params[:page])
    @categores = Category.all
    #
    #respond_to do |format|
    #  format.js
    #  format.html
    #  format.xml  { render :xml => @posts }
    #  format.json { render json: @posts }
    #end
    #full_title("List of posts")
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
