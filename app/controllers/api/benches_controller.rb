class Api::BenchesController < ApplicationController

  def index
    @benches = Bench.all
  end

  def create
    @bench = Bench.new(benches_params)

    if @bench.save
      render :create
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  # def show
  #   @bench = Bench.find(params[:id])
  # end

  def benches_params
    params.require(:bench).permit(:description, :lat, :lng)
  end
end
