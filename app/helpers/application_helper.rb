module ApplicationHelper


  def javascript(*args)
    content_for(:head) { javascript_include_tag(*args) }
  end


  def full_title(page_title)
    base_title = "Ruby on Rails Tutorial Sample App"
    if page_title.empty?
      base_title
    else
      "#{base_title} | #{page_title}"
    end
  end

  def TimeNow
    @TimeNow = Time.now
  end


end
