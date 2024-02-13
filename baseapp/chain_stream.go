package baseapp

import (
	"context"
	abci "github.com/cometbft/cometbft/abci/types"
	"time"
)

type StreamEvents struct {
	Events    []abci.Event
	Height    uint64
	BlockTime time.Time
	Flush     bool
	Source    string
	Ctx       context.Context
}

func (app *BaseApp) AddStreamEvents(height int64, blockTime time.Time, events []abci.Event, flush bool, source string, ctx context.Context) {
	if app.EnableStreamer {
		app.StreamEvents <- StreamEvents{
			Events:    events,
			Height:    uint64(height),
			BlockTime: blockTime,
			Flush:     flush,
			Source:    source,
			Ctx:       ctx,
		}
	}
}
