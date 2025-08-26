# Metrics

This page documents the key metrics used to monitor and improve our project performance. Each metric includes a definition, purpose, calculation method, how will we measure it, and the impact it'll have in the project.

We also provide a website that dynamically updates the graphs of these metrics using real-time data fetched from our GitHub projects. This ensures that our visualizations always reflect the most up-to-date project status:

:::tip Live Metrics Dashboard
Access our dynamic dashboard with real-time metrics from GitHub:

[📊 Open the live site](https://oraculo-analysis.vercel.app)
:::

import Link from '@docusaurus/Link';

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <Link to="/oraculo/metrics/throughput" className="card-link">
      <div className="card card--full-height">
        <div className="card__header">
          <h3>🔁 Throughput</h3>
        </div>
        <div className="card__body">
          <p>
            Measure the number of work items (like features or bug fixes) completed per unit of time. It helps answer, "How much work are we getting done?"
          </p>
        </div>
      </div>
    </Link>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <Link to="/oraculo/metrics/burnup" className="card-link">
      <div className="card card--full-height">
        <div className="card__header">
          <h3>📈 BurnUp</h3>
        </div>
        <div className="card__body">
          <p>
            Track your team's progress against the total project scope. This chart clearly shows work completed, total scope, and the expected completion date.
          </p>
        </div>
      </div>
    </Link>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <Link to="/oraculo/metrics/leadtime" className="card-link">
      <div className="card card--full-height">
        <div className="card__header">
          <h3>⏱️ Lead Time</h3>
        </div>
        <div className="card__body">
          <p>
            Understand the total time elapsed from the moment a work item is requested until it is delivered. It reflects the entire customer experience.
          </p>
        </div>
      </div>
    </Link>
  </div>

  <div className="col col--6 margin-bottom--lg">
    <Link to="/oraculo/metrics/cycletime" className="card-link">
      <div className="card card--full-height">
        <div className="card__header">
          <h3>🔄 Cycle Time</h3>
        </div>
        <div className="card__body">
          <p>
            Focus on the active development time. This measures the time from when work begins on an item until it is ready for delivery. It answers, "How long does it take to do the work?"
          </p>
        </div>
      </div>
    </Link>
  </div>
</div>
