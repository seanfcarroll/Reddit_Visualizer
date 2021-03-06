class PathsController < ApplicationController

  def show
    start_subreddit = Subreddit.find_by_name_case_insensitive(params[:beginning])
    end_subreddit = Subreddit.find_by_name_case_insensitive(params[:destination])

    path = Pathfinder.new
    @path = path.find_path(start_subreddit, end_subreddit)
    if @path
      respond_to do |format|
        format.json
      end
    else
      render json: 'No path found.'.to_json, status: 404
    end
  end

end
